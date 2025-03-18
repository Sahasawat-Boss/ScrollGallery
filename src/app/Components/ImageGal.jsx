"use client";

import { useState } from "react";

const ImageGal = () => {
    const initialImages = [
        { id: 1, url: "https://placehold.co/250x250", tags: ["Nature", "Ocean"] },
        { id: 2, url: "https://placehold.co/250x200", tags: ["City"] },
        { id: 3, url: "https://placehold.co/300x300", tags: ["Animal", "Wildlife"] },
        { id: 4, url: "https://placehold.co/220x200", tags: ["Tech", "AI", "Innovation"] },
        { id: 5, url: "https://placehold.co/280x150", tags: ["Food"] },
        { id: 6, url: "https://placehold.co/230x170", tags: [] },
        { id: 7, url: "https://placehold.co/270x250", tags: ["Travel", "Nature"] },
        { id: 8, url: "https://placehold.co/290x180", tags: ["Cars", "Speed"] },
        { id: 9, url: "https://placehold.co/310x220", tags: ["Photography"] },
    ];

    const [images, setImages] = useState(initialImages);
    const addTag = (id) => {
        const tag = prompt("Enter new tag:");
        if (tag) {
            setImages((prev) =>
                prev.map((img) =>
                    img.id === id ? { ...img, tags: [...img.tags, tag] } : img
                )
            );
        }
    };

    return (
        <div className="columns-3 gap-4 p-4">
            {images.map((img) => (
                <div key={img.id} className="break-inside-avoid mb-4 rounded-md p-2 shadow-lg bg-white">
                    <img src={img.url} alt="Gallery" className="w-full h-auto rounded-md" />
                    <div className="mt-2 flex flex-wrap gap-2">
                        {img.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-red-100 border border-red-400 text-red-500 rounded">
                                {tag}
                            </span>
                        ))}
                        <button
                            onClick={() => addTag(img.id)}
                            className="px-2 py-1 text-xs bg-white border border-red-400 text-red-500 rounded hover:bg-red-200"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGal;
