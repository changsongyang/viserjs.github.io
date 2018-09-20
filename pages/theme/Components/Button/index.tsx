import * as React from 'react';
import './index.scss';

const icons = {
    reset: '&#xe614;',
    import: '&#xe635;',
    export: '&#xe634;',
    download: '&#xe60e;',
    refresh: '&#xe62e;',
    copy: '&#xe632;',
    arrow: '&#xe645;'
}
interface IProps {
    type?: string;
    size?: string;
    icon?: string;
    onClick?: any;
    style?: any;
    children?: any;
    className?: string;
}
const Button = (props: IProps) => {
    /**
     * @prop:type,size,onClick,icon,style,children,className
     * type:default,dark,null
     * size:small,medium,large
     * onClick:function,
     * icon:reset,import,export,download,refresh,copy,arrow
     * style:object;
     * children:node;
     * className:string
    */
    return <button
        className={`viser-custom-btn ${props.type || ''} ${props.size || 'medium'} ${props.className || ''}`}
        style={props.style || {}}
        onClick={(e) => {
            if (props.onClick) {
                props.onClick(e);
            }
        }}
    >
        {props.icon && Object.keys(icons).indexOf(props.icon) >= 0 && (
            <i className="icon-font" dangerouslySetInnerHTML={{ __html: icons[props.icon] }}></i>
        )}
        {props.children}
    </button>
};
export default Button;
