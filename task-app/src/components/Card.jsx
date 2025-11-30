export default function Card({ children }) {
  return (
    <section className="bg-white border rounded-lg shadow p-4 hover:shadow-md transition">
      {children}
    </section>
  );
}
