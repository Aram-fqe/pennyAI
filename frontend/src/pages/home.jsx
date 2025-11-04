//hoem page design 
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-[#001030] text-white font-inter">
      {/* Header Section */}
      <section className="text-center pt-24 pb-16">
        <div className="inline-block px-4 py-1 bg-[#0a2c5f] text-sm rounded-full border border-[#2F80ED]/30 mb-6">
          <span className="text-[#2F80ED] font-semibold">New</span> Introducing PennyAi 2.0 🚀
        </div>

        <h1 className="text-5xl md:text-6xl font-bold">
          Smarter Spending <br />
          <span className="text-[#2F80ED]">Starts Here.</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg">
          Empower your finances with <span className="font-semibold text-white">PennyAi</span> — track expenses,
          analyze spending habits, and get AI-driven insights to save more.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] rounded-xl font-medium shadow-lg hover:shadow-[#2F80ED]/40 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-[#2F80ED] rounded-xl hover:bg-[#2F80ED]/10 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="text-center py-16 border-t border-[#2F80ED]/10">
        <h2 className="text-4xl font-semibold mb-3">
          Visualize Your <span className="text-[#2F80ED]">Spending</span>
        </h2>
        <p className="text-gray-400 mb-10">
          Get real-time insights with beautiful charts and AI analytics.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div className="bg-[#011b36]/70 p-6 rounded-2xl border border-[#2F80ED]/10 shadow-md backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2 text-[#56CCF2]">Category Distribution</h3>
            <div className="h-40 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-[10px] border-[#2F80ED] border-t-[#56CCF2] animate-spin-slow"></div>
            </div>
          </div>

          <div className="bg-[#011b36]/70 p-6 rounded-2xl border border-[#2F80ED]/10 shadow-md backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2 text-[#56CCF2]">Spending Trend</h3>
            <div className="h-40 flex items-center justify-center text-gray-400">
              📈 AI-powered analytics visualization
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 border-t border-[#2F80ED]/10">
        <h2 className="text-center text-4xl font-semibold mb-12">
          Powerful Expense <span className="text-[#2F80ED]">Management</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {[
            { icon: "➕", title: "Add Expense", desc: "Quickly add new expenses with category and amount" },
            { icon: "✏️", title: "Edit/Delete", desc: "Modify or remove expenses with ease" },
            { icon: "🔍", title: "Filter by Date", desc: "View expenses for specific time periods" },
            { icon: "📊", title: "Real-time Chart Update", desc: "Watch your charts update instantly" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#011b36]/60 p-6 rounded-2xl border border-[#2F80ED]/10 hover:border-[#56CCF2]/40 transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-[#2F80ED]/10 text-gray-400 text-sm">
        <p>© 2025 PennyAi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
