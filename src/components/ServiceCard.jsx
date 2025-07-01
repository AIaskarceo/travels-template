// ServiceCard.jsx
export default function ServiceCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}
