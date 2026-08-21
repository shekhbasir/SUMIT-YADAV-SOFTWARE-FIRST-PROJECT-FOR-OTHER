export default function JoinMovementModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-2xl bg-[#081b11] p-6 text-white">
        <h2 className="text-xl font-bold">Join Movement</h2>

        <p className="mt-3 text-slate-400">
          Join Movement form will come here.
        </p>

        <button
          onClick={onClose}
          className="mt-6 rounded-xl bg-lime-400 px-5 py-2 font-bold text-black"
        >
          Close
        </button>
      </div>
    </div>
  );
}
