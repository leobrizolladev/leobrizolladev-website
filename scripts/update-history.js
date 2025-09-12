#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
/* eslint-enable @typescript-eslint/no-require-imports */

const HISTORY_FILE = path.join(process.cwd(), 'HISTORY.md');

function getLastCommitInfo() {
  try {
    const hash = execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
    const message = execSync('git log -1 --pretty=%B', {
      encoding: 'utf8',
    }).trim();
    const author = execSync('git log -1 --pretty=%an', {
      encoding: 'utf8',
    }).trim();
    const date = execSync('git log -1 --pretty=%ad --date=short', {
      encoding: 'utf8',
    }).trim();

    return { hash: hash.substring(0, 7), message, author, date };
  } catch (error) {
    console.error('Erro ao obter informações do commit:', error.message);
    return null;
  }
}

function getChangedFiles() {
  try {
    const files = execSync('git diff --name-only HEAD~1 HEAD', {
      encoding: 'utf8',
    })
      .split('\n')
      .filter((file) => file.trim() !== '')
      .filter((file) => !file.includes('HISTORY.md')); // Evita recursão

    return files;
  } catch (error) {
    console.error('Erro ao obter arquivos alterados:', error.message);
    return [];
  }
}

function determineChangeType(commitMessage, files) {
  const msg = commitMessage.toLowerCase();

  if (msg.includes('feat:') || msg.includes('add:') || msg.includes('new:'))
    return 'feat';
  if (msg.includes('fix:') || msg.includes('bug:')) return 'fix';
  if (msg.includes('docs:') || msg.includes('doc:')) return 'docs';
  if (msg.includes('style:') || msg.includes('format:')) return 'style';
  if (msg.includes('refactor:') || msg.includes('refact:')) return 'refactor'; // cspell:disable-line
  if (msg.includes('test:') || msg.includes('tests:')) return 'test';
  if (msg.includes('chore:') || msg.includes('build:') || msg.includes('ci:'))
    return 'chore';

  // Inferir baseado nos arquivos
  if (
    files.some(
      (f) => f.includes('test') || f.includes('.test.') || f.includes('.spec.')
    )
  )
    return 'test';
  if (files.some((f) => f.endsWith('.md') || f.includes('README')))
    return 'docs';
  if (files.some((f) => f.includes('package.json') || f.includes('config')))
    return 'chore';

  return 'other';
}

function formatHistoryEntry(commitInfo, files) {
  const changeType = determineChangeType(commitInfo.message, files);

  let entry = `## ${commitInfo.date}\n\n`;
  entry += `### ${changeType.toUpperCase()}: ${commitInfo.message}\n\n`;
  entry += `**Commit:** ${commitInfo.hash} | **Author:** ${commitInfo.author}\n\n`;

  if (files.length > 0) {
    entry += `**Arquivos alterados:**\n`;
    files.forEach((file) => {
      entry += `- ${file}\n`;
    });
    entry += '\n';
  }

  entry += '---\n\n';

  return entry;
}

function updateHistory() {
  const commitInfo = getLastCommitInfo();
  if (!commitInfo) {
    console.log('Não foi possível obter informações do commit.');
    return;
  }

  const changedFiles = getChangedFiles();
  const newEntry = formatHistoryEntry(commitInfo, changedFiles);

  let existingContent = '';
  if (fs.existsSync(HISTORY_FILE)) {
    existingContent = fs.readFileSync(HISTORY_FILE, 'utf8');
  } else {
    existingContent =
      '# Histórico de Mudanças\n\nEste arquivo mantém um registro de todas as mudanças relevantes do projeto.\n\n';
  }

  // Inserir nova entrada após o cabeçalho
  const lines = existingContent.split('\n');
  const headerEndIndex = lines.findIndex(
    (line, index) =>
      index > 0 && line.trim() === '' && lines[index - 1].includes('projeto.')
  );

  if (headerEndIndex !== -1) {
    lines.splice(headerEndIndex + 1, 0, newEntry);
  } else {
    // Se não encontrou o padrão, adiciona no final do cabeçalho padrão
    lines.splice(3, 0, newEntry);
  }

  fs.writeFileSync(HISTORY_FILE, lines.join('\n'), 'utf8');
  console.log(`Histórico atualizado com commit ${commitInfo.hash}`);
}

// Executar se chamado diretamente
if (require.main === module) {
  updateHistory();
}

module.exports = { updateHistory };
