export  function App() {
  return (
    <section className="min-h-[65vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Get in Touch</h2>
        
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full px-3.5 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-3.5 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
            />
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows={4}
              required
              className="w-full px-3.5 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}