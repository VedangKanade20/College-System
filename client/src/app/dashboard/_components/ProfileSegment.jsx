import { IconSearch, IconUserFilled } from "@tabler/icons-react";

export default function ProfileSegment() {
  return (
    <div className="flex items-center justify-between p-3 mb-5 border-b">
      {/* Search Input */}
      <div className="flex items-center gap-2 text-gray-500">
        <IconSearch size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none text-sm placeholder-gray-400"
        />
      </div>

      {/* Profile Avatar */}
      <div>
        <IconUserFilled size={25} />
      </div>
    </div>
  );
}
