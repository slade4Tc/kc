'use client';

import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  ms?: number;
};

const KEY = 'kc_splash_shown_v1';

export default function SplashGate({ children, ms = 4000 }: Props) {
  const [ready, setReady] = useState(false);
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let shouldShow = true;

    try {
      const already = sessionStorage.getItem(KEY);
      if (already === '1') {
        shouldShow = false;
      } else {
        sessionStorage.setItem(KEY, '1');
      }
    } catch {
      shouldShow = true;
    }

    if (!shouldShow) {
      setReady(true);
      return;
    }

    setShow(true);

    const t1 = setTimeout(() => setFade(true), ms - 300);
    const t2 = setTimeout(() => {
      setShow(false);
      setReady(true);
    }, ms);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [ms]);

  // ❗ IMPORTANT: hide site until decision is made
  if (!ready && !show) {
    return null;
  }

  return (
    <>
      {!ready && show && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#07080b] transition-opacity duration-300 ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="text-center">
            <div className="text-6xl font-semibold tracking-tight">
              <span className="text-sky-400">Kroba</span>
              <span className="text-amber-400">Cards</span>
            </div>

            <div className="mt-6 h-[6px] w-72 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full w-full origin-left rounded-full animate-[kcbar_4s_linear_forwards]"
                style={{
                  background:
                    'linear-gradient(90deg, #38bdf8 0%, #f59e0b 100%)',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {ready && children}

      <style jsx global>{`
        @keyframes kcbar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </>
  );
}
