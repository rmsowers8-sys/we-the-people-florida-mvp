'use client';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <label className="flex items-center gap-3 rounded-full border border-border bg-white px-4 py-3 shadow-sm">
      <span className="text-gray-500">🔍</span>
      <input
        type="text"
        className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}
