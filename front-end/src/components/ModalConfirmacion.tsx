interface ModalConfirmacionProps {
    isOpen: boolean;
    onClose: () => void; // Las funciones deben tener un tipo que indique qué hacen (void si no devuelven nada)
    mensaje: string;
    onConfirm: () => void;
    onCancel: () => void;
    textoConfirm?: string; // El signo de interrogación '?' indica que la prop es opcional
    textoCancel?: string;
}

export function ModalConfirmacion({ 
    isOpen,
    onClose,
    mensaje,
    onConfirm,
    onCancel,
    textoConfirm = 'Reemplazar',
    textoCancel = 'Cancelar',
}: ModalConfirmacionProps) {

    if (!isOpen) {
        return null;
    }
    onClose()

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{mensaje}</div>
                </div>
                <div className="px-6 py-4 bg-gray-50 text-right">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                        onClick={onCancel}
                    >
                        {textoCancel}
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onConfirm}
                    >
                        {textoConfirm}
                    </button>
                </div>
            </div>
        </div>
    );

}