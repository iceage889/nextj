export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-white p-6 rounded shadow">
          <h2 className="font-bold mb-4">Manage My Account</h2>
          <ul className="space-y-2 text-sm">
            <li className="text-red-500 font-semibold">My Profile</li>
            <li className="text-gray-400">Address Book</li>
            <li className="text-gray-400">My Payment Options</li>
          </ul>

          <h2 className="font-bold mt-6 mb-2">My Orders</h2>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-400">My Returns</li>
            <li className="text-gray-400">My Cancellations</li>
          </ul>

          <h2 className="font-bold mt-6 mb-2">My Wishlist</h2>
        </aside>

        {/* Profile Form */}
        <section className="md:col-span-3 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-red-500 mb-6">
            Edit Your Profile
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  className="w-full mt-1 px-3 py-2 bg-gray-100 rounded"
                  defaultValue="Md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  className="w-full mt-1 px-3 py-2 bg-gray-100 rounded"
                  defaultValue="Rimel"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  className="w-full mt-1 px-3 py-2 bg-gray-100 rounded"
                  defaultValue="rimel1111@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                  className="w-full mt-1 px-3 py-2 bg-gray-100 rounded"
                  defaultValue="Kingston, 5236, United State"
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-md mb-2">Password Changes</h3>
              <input
                type="password"
                className="w-full mb-2 px-3 py-2 bg-gray-100 rounded"
                placeholder="Current Password"
              />
              <input
                type="password"
                className="w-full mb-2 px-3 py-2 bg-gray-100 rounded"
                placeholder="New Password"
              />
              <input
                type="password"
                className="w-full mb-2 px-3 py-2 bg-gray-100 rounded"
                placeholder="Confirm New Password"
              />
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button type="button" className="text-sm font-medium">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
