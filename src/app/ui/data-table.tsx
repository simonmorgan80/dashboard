'use client';
import { useState } from 'react';
import type { DataTableType } from '@/lib/type-defs';
import DataTableItem from '@/app/ui/data-table-item';
import Icon from '@/app/ui/ui-icon';

export default function DataTable( { title, columns, data } : DataTableType ) {
    const [ isOpen, setIsOpen ] = useState(true);
    
    return (
        <div className="my-8">
            <div className="container mx-auto px-4">

                <div className="overflow-x-auto">
                    {title &&
                    <div className="bg-blue-900 text-white px-4 py-3 flex justify-between items-center">
                        <h2 className="tracking-wider font-semibold">{title}</h2>
                        <button className="w-8 h-8" onClick={() => setIsOpen(!isOpen)} >
                            <Icon id={isOpen ? 'chevron-up' : 'chevron-down'} />
                        </button>
                    </div>
                    }
                    {isOpen &&
                    <table className="w-full text-sm text-left table-auto">
                        <thead>
                            <tr>
                                {columns && columns.map((column, i) => (
                                    <th key={i} className="bg-slate-200 px-4 py-3 font-medium tracking-wide">
                                        {column.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((dataItem, index) => (
                                <DataTableItem key={index} dataItem={dataItem} columns={columns}/>
                            ))}
                        </tbody>
                    </table>
                    }
                </div>

            </div>
        </div>
    )
}