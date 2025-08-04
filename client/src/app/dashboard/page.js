export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-primary">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <p className="text-gray-600">Total Students</p>
          <h2 className="text-2xl font-bold">1,245</h2>
        </div>

        <div className="bg-blue-100 p-4 rounded shadow">
          <p className="text-gray-600">Marks Pending</p>
          <h2 className="text-2xl font-bold">87</h2>
        </div>

        <div className="bg-blue-100 p-4 rounded shadow">
          <p className="text-gray-600">Subjects Active</p>
          <h2 className="text-2xl font-bold">32</h2>
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-6">
        Student Performance Overview
      </h2>
      {/* Chart or more components can go here */}
    </div>
  );
}
