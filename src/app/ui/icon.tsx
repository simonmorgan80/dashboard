type IconProps = {
    id: string,
    style?: string,
    size?: 'sm' | 'lg'
}

export default function Icon( { id, style, size } : IconProps ) {

    let className = style;

    switch ( size ) {
        case 'sm' :
            className += ' h-4 w-4';
            break;
        case 'lg' :
            className += ' h-8 w-8';
            break;
        default:
            className += ' h-6 w-6';
            break;
    }

    return (
        <>
            <svg className={`inline-block fill-current stroke-current ${className}`} height="24px" width="24px" aria-hidden="true" focusable="false">
                <use xlinkHref={`/images/icons/symbol-defs.svg#icon-${ id }`}></use>
            </svg>
        </>
    )
}