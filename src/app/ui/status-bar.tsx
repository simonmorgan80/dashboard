'use client';
import { useState } from 'react';
import Icon from './icon';

export default function StatusBar() {
    const [searchTerm, setSearchTerm ] = useState('');

    return (
        <div className="bg-slate-100 border-b-blue-400 border-b-8 py-2 md:py-4">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                    <div className="lg:col-span-6">

                        <p className="text-sm tracking-wider">Status&hellip;</p>

                    </div>
                    <div className="lg:col-span-3 lg:col-start-10 justify-end">

                        <form action="#" className="">
                            <div className="flex flex-row items-center">
                                <label htmlFor="search" className="block text-sm tracking-wider me-1">Search</label>
                                <input type="search" className="text-sm px-2 py-2 w-full" id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                                <button type="submit" className="px-2 h-[36px] w-[36px] bg-white hover:bg-blue-400 hover:text-white">
                                    <span className="sr-only"></span>
                                    <Icon id="arrow-right" style="" size="sm"/>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>                
            </div>
        </div>
    )
}