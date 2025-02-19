'use client';
import { useState } from 'react';
import type { DataTableItemType } from '@/lib/type-defs';
import Icon from '@/app/ui/ui-icon';

export default function DataTableItem( { dataItem, columns } : DataTableItemType ) {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <tr className="border-b-slate-200 border-b">
                {columns && columns.map((column, index) => {
                    const key: string = column.id;
                    const cellValue = dataItem[key];
                    return (
                        <td key={index} className="px-4 py-3">
                            {index === 0 ? (
                                <button className="" onClick={() => setIsOpen(!isOpen)} >
                                    <Icon id={isOpen ? 'chevron-up' : 'chevron-down'} style="me-2"/>
                                    <>{cellValue}</>
                                </button>
                            ): 
                                <>{cellValue}</>
                            }
                        </td>
                    )
                })}
            </tr>

            {isOpen && dataItem.subdatasets && dataItem.subdatasets.map((subdata, index) => (
                <tr key={index} className="bg-slate-200 border-b-slate-100 border-b">
                    {columns && columns.map((column, j) => {
                        const key: string = column.id;
                        const cellValue = subdata[key];
                        return (
                            <td key={j} className="px-4 py-3">
                                <>{cellValue}</>
                            </td>
                        )
                    })}
                </tr>
            ))}
        </>
    )
}