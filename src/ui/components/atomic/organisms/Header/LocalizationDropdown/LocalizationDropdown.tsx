'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

type LanguageOption = { label: string; value: string };

type LocalizationDropdownProps = {
  languages: LanguageOption[];
  current: string;
  onSelect: (value: string) => void;
};

// 1:1 with the Shopify header language switcher (header-icons.liquid
// li.localization > details[is=details-dropdown] + theme.js DetailsDropdown +
// theme.css .dropdown / .dropdown__nav).
//
// Markup: the .dropdown wrapper is `absolute top-0` (aligned to the top of the
// trigger), `opacity-0 invisible`. Inside, .dropdown__container starts hidden
// behind the trigger and slides down.
//
// Open (transitionIn):
//   wrapper:    opacity 0->1, visibility visible, 0.6s ease [.7,0,.2,1], delay 0.2s
//   container:  transform translateY(-105%)->0, 0.6s ease [.7,0,.2,1]
//   items (li): translateX(20%)->0, opacity 0->1, transform 1s cubic-bezier(.075,.82,.165,1),
//               opacity 1s cubic-bezier(.19,1,.22,1), staggered 0.3s + 0.1s per item
// Close (transitionOut):
//   wrapper:    opacity 0, visibility hidden, 0.3s
//   container:  transform translateY(-105%), 0.6s
//
// Sizing (header, not topbar): .dropdown min-width 250px, width max-content,
//   margin-inline-start calc(-sp-8) = -32px, border-radius clamp(1rem,1.05vw,1.25rem)
//   on the bottom corners, background --color-background.
//   .dropdown__container padding-block 24px / 40px (sp-6 / sp-10).
//   .dropdown__nav li>p padding-inline 32px (sp-8), gap 6px (gap-1d5) / 8px xl.
//
// Selecting mirrors LocalizationListbox.onItemClick (submit /localization + reload
// on the same path); delegated here via onSelect (postMessage when embedded).
const EASE: [number, number, number, number] = [0.7, 0, 0.2, 1];

const LocalizationDropdown = ({ languages, current, onSelect }: LocalizationDropdownProps) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="relative z-20 rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white"
      >
        {current}
      </button>

      {/* wrapper: absolute top-0 (aligned to the top of the trigger), overflow
          clips the container while it is translated out of view above. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="loc-dropdown"
            initial={{ opacity: 0, visibility: 'hidden' }}
            animate={{ opacity: 1, visibility: 'visible', transition: { duration: 0.6, ease: EASE, delay: 0.2 } }}
            exit={{ opacity: 0, visibility: 'hidden', transition: { duration: 0.3, ease: EASE } }}
            className="absolute left-0 top-0 z-10 -ml-8 w-max min-w-62 overflow-hidden pt-9"
          >
            <motion.div
              initial={{ y: '-105%' }}
              animate={{ y: 0, transition: { duration: 0.6, ease: EASE } }}
              exit={{ y: '-105%', transition: { duration: 0.6, ease: EASE } }}
              className="rounded-b-[clamp(1rem,1.05vw,1.25rem)] bg-white pt-6 pb-10"
              style={{ boxShadow: '0 16px 34px -10px rgba(0,0,0,.16)' }}
            >
              <ul className="flex flex-col gap-1.5 xl:gap-2" role="listbox">
                {languages.map((lang, i) => (
                  <motion.li
                    key={lang.value}
                    className="px-8"
                    initial={{ x: '20%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      x: { duration: 1, ease: [0.075, 0.82, 0.165, 1], delay: 0.3 + i * 0.1 },
                      opacity: { duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 + i * 0.1 },
                    }}
                  >
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang.label === current}
                      onClick={() => {
                        setOpen(false);
                        onSelect(lang.value);
                      }}
                      className={`block whitespace-nowrap py-0.5 text-sm transition-opacity hover:opacity-60 ${
                        lang.label === current ? 'pointer-events-none text-primary-10/40' : 'text-primary-10'
                      }`}
                    >
                      {lang.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { LocalizationDropdown };
