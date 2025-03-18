"use client";

import { useState } from "react";

const ImageGal = () => {
    const initialImages = [
        { id: 1, url: "https://placehold.co/250x250", tags: ["Nature", "Wild",'Animals'] },
        { id: 2, url: "https://placehold.co/250x200", tags: [] },
        { id: 3, url: "https://placehold.co/300x300", tags: ["Nature", "Animals"] },
        { id: 4, url: "https://placehold.co/220x200", tags: ["Tech", "AI", "Innovation"] },
        { id: 5, url: "https://placehold.co/280x150", tags: ["Food"] },
        { id: 6, url: "https://placehold.co/230x170", tags: [] },
        { id: 7, url: "https://placehold.co/270x250", tags: ["Animals", "Nature"] },
        { id: 8, url: "https://placehold.co/290x180", tags: ["Inovation", "Tech"] },
        { id: 9, url: "https://placehold.co/310x220", tags: ["Nature", 'Animals', 'Wild', 'Explore'] },
        { id: 10, url: "https://placehold.co/350x400", tags: ['Innovation'] },
        { id: 11, url: "https://placehold.co/350x400", tags: ["Tech", "AI", "Innovation"] },
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
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-6 animate-fade-in-up lg:max-w-7xl mx-auto">
            {images.map((img) => (
                <div key={img.id} className="break-inside-avoid mb-4 rounded-md p-2 shadow-xl bg-white hover:scale-105 transition duration-200">
                    <img src={img.url} alt="Gallery" className="w-full h-full rounded-md" />
                    <div className="mt-2 flex flex-wrap gap-2">
                        {img.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-sm lg:text-base bg-blue-100 border border-blue-400 text-blue-500 rounded hover:bg-blue-400 hover:text-blue-100 hover:cursor-pointer">
                                {tag}
                            </span>
                        ))}
                        <button
                            onClick={() => addTag(img.id)}
                            className="px-2 py-1 text-xs bg-white border border-blue-400 text-blue-500 rounded hover:bg-blue-200 hover:cursor-pointer"
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
