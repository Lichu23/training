interface Props{
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export default function SearchItem({ searchValue, setSearchValue}: Props) {
  return (
    <div>
      <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" />
    </div>
  );
}
