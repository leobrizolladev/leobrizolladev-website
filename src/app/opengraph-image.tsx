import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OgImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#04020b',
          color: '#f8f9ff',
          padding: '72px',
          fontFamily: 'Rubik, sans-serif',
          backgroundImage:
            'radial-gradient(circle at 10% 0, rgba(0,224,255,0.25), transparent 45%), radial-gradient(circle at 90% 0, rgba(159,124,255,0.32), transparent 55%)',
        }}
      >
        <span
          style={{
            fontSize: 24,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#9f7cff',
          }}
        >
          Leonardo Brizolla
        </span>
        <h1
          style={{
            fontSize: 72,
            marginTop: 24,
            maxWidth: 780,
            lineHeight: 1.1,
            fontWeight: 600,
          }}
        >
          Construo experiências web com cuidado artesanal
        </h1>
        <p
          style={{
            marginTop: 24,
            fontSize: 28,
            maxWidth: 720,
            color: '#adb1d5',
          }}
        >
          Produtos full stack, devtools e pixel art com foco em performance, DX
          e narrativa visual.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
