"use client";

import { useState, useEffect } from "react";

// List of possible tags
const tagPool = ["AI", "Tech", "Innovation", "Developer", "Explore", "Coding", "Test", "Gallery", "Stack"];

// Function to generate random tags (1-4 tags per image)
const getRandomTags = () => {
    const shuffled = tagPool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 4) + 1);
};

const ImageGal = () => {
    const initialImages = [
        { id: 1, url: "https://placehold.co/250x250", tags: [] },
        { id: 2, url: "https://placehold.co/250x200", tags: [] },
        { id: 3, url: "https://placehold.co/300x300", tags: [] },
        { id: 4, url: "https://placehold.co/220x200", tags: [] },
        { id: 5, url: "https://placehold.co/280x150", tags: [] },
        { id: 6, url: "https://placehold.co/230x170", tags: [] },
        { id: 7, url: "https://placehold.co/270x250", tags: [] },
        { id: 8, url: "https://placehold.co/290x180", tags: [] },
        { id: 9, url: "https://placehold.co/310x220", tags: [] },
        { id: 10, url: "https://placehold.co/350x400", tags: [] },
        { id: 11, url: "https://placehold.co/350x400", tags: [] },
    ];

    const [images, setImages] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);

    // Auto-generate random tags for images with empty tags
    useEffect(() => {
        const updatedImages = initialImages.map((img) =>
            img.tags.length === 0 ? { ...img, tags: getRandomTags() } : img
        );
        setImages(updatedImages);
    }, []);

    const addTag = (id) => {
        const tag = prompt("Create new tag:");
        if (tag) {
            setImages((prev) =>
                prev.map((img) =>
                    img.id === id ? { ...img, tags: [...img.tags, tag] } : img
                )
            );
        }
    };

    // Filter images by selected tag
    const filteredImages = selectedTag
        ? images.filter((img) => img.tags.includes(selectedTag)) : images;

    return (
        <div className="p-6 animate-fade-in-up lg:max-w-7xl mx-auto">
            {/* Filter Category Display */}
            {selectedTag && (
                <div className="mb-6 text-center">
                    <p className="inline-block px-4 py-2 bg-blue-500 text-white rounded">
                        Tag Category: #{selectedTag}
                    </p>
                    <button
                            onClick={() => setSelectedTag(null)}
                            className="relative ml-2 text-black hover:cursor-pointer hover:scale-110 transform"
                        >
                            <div className="absolute left-0 -top-5">Clear</div>
                        </button>
                </div>
            )}

            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                {filteredImages.map((img) => (
                    <div
                        key={img.id}
                        className="break-inside-avoid mb-4 rounded-md p-2 shadow-xl bg-white hover:scale-105 transition duration-200"
                    >
                        <img src={img.url} alt="Gallery" className="w-full h-full rounded-md" />
                        <div className="mt-2 flex flex-wrap gap-2">
                            {img.tags.map((tag, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedTag(tag)}
                                    className="px-2 py-1 text-sm lg:text-base bg-blue-100 border border-blue-400 text-blue-500 rounded hover:bg-blue-400 hover:text-blue-100 hover:cursor-pointer"
                                >
                                    {tag}
                                </button>
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
        </div>
    );
};

export default ImageGal;
