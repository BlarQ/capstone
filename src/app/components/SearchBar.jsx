'use client'
import React, { useState, useEffect, useRef } from 'react';
import { data } from './data';
import Link from 'next/link';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const suggestionBoxRef = useRef(null);

    function searchShirt(e) {
        const value = e.target.value.toLowerCase();
        setQuery(value);
        if (value === '') {
            setFilteredItems([]);
            return;
        }

        const filtered = data.filter(item => 
            item.name.toLowerCase().includes(value) || 
            item.type.toLowerCase().includes(value)
        ).slice(0, 5);
        
        setFilteredItems(filtered);
    }

    // Click outside handler
    useEffect(() => {
        function handleClickOutside(event) {
            if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
                setFilteredItems([]);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [suggestionBoxRef]);

    return (
        <div className='my-10'>
            <div className='flex justify-center items-center my-10'>
                <input 
                    className='border-2 px-4 rounded-full w-[80%] md:w-96 h-1 md:h-10 py-4 md:py-5 outline-none text-[#2e4053] md:font-bold text-xs md:text-base italic md:not-italic' 
                    type="text" 
                    name="search" 
                    id="search" 
                    onChange={searchShirt} 
                    defaultValue={query} 
                    placeholder='Search here for TrendItems' 
                />
            </div>

            {
                filteredItems.length > 0 && (
                    <div ref={suggestionBoxRef} className='absolute top-32 p-4 bg-[#2e4053] text-white md:w-1/4 font-bold rounded-xl left-[60%] -translate-x-1/2 flex flex-col gap-2'>
                        {
                            filteredItems.map(item => (
                                <section key={item.id}>
                                    <Link href={`/product/${item.name.split(' ').join('-')}`}>
                                        <div onClick={() => setFilteredItems([])}>
                                            {item.name}
                                        </div>
                                    </Link>
                                </section>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}
