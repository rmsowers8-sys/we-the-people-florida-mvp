"use client";

type Tab = { key: string; label: string };

export default function TabBar({
  tabs,
  activeKey,
  onChange,
}: {
  tabs: Tab[];
  activeKey: string;
  onChange: (key: string) => void;
}) {
  return (
    <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto flex max-w-md gap-1 p-2">
        {tabs.map((t) => {
          const active = t.key === activeKey;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => onChange(t.key)}
              className={[
                "flex-1 rounded-full px-3 py-2 text-sm transition",
                active
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-700 hover:bg-gray-100",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
