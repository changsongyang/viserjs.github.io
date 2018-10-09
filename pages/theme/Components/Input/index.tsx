import * as React from 'react';
import {render} from 'react-dom';
import { SketchPicker } from 'react-color';
import {colorRGB2Hex} from '../../../common/utils';
import './index.scss';

const gloStore={
    target:null,
    color:'',
    clicked:true
};
const document=(window as any).document;
if(!document.getElementById('sketchPicker-box')){
    const div=document.createElement('div');
    div.id="sketchPicker-box";
    document.getElementsByTagName('body')[0].appendChild(div);
}
class SketchProps{
    public cfg?:any;
}
class SketchState{

}
class Sketch extends React.Component<SketchProps,SketchState>{
    public state=new SketchState();
    static defaultProps=new SketchState();
    public onChangeComplete=(color)=>{
        gloStore.color=color.hex;
        gloStore.clicked=false;
    }
    render(){
        const {cfg}=this.props;
        if(!cfg){
            return null;
        }
        return (
        <div
            className="sketch-Box"
            style={{left:cfg.x,top:cfg.y}}
        >
            <SketchPicker
                color={cfg.color}
                onChangeComplete={this.onChangeComplete}
            />
        </div>
        )
    }
}
const createSketcher=(cfg=null)=>{
    render(<Sketch cfg={cfg}/>,document.getElementById('sketchPicker-box'));
}


class Props{
    public value?: any;
    public name?: any;
    public type?: string;
    public onChange?: any;
    public onBlur?: any;
    public onFocus?: any;
    public label?: any;
    public style?: any;
    public showColor?:boolean=false;
    public completeSelect?:any;
}
class State{

}


(window as any).addEventListener('click',function(e){
    const box=document.getElementById('sketchPicker-box');
    if(!gloStore||!box.innerHTML){
        return ;
    }
    if(e.target!==gloStore.target&&!box.contains(e.target)){
        createSketcher();
        gloStore.target=null;
    }
});

export default class Input extends React.Component<Props,State>{
    public state = new State();
    static defaultProps = new Props();
    public handleClick=(e)=>{
        let y=e.clientY+20;
        const color=colorRGB2Hex(e.target.style.backgroundColor);
        if(y>window.innerHeight-305){
            y=e.clientY-325;
        }
        gloStore.target=e.target;
        gloStore.color=color;
        createSketcher({
            x:e.clientX-110,
            y,
            color
        });
    };
    public componentDidMount(){
        const self=this;
        if(self.props.completeSelect){
            setInterval(()=>{
                if(!gloStore.clicked&&self.props.value!==gloStore.color){
                    self.props.completeSelect(gloStore.color);
                    gloStore.clicked=true;
                }
            },100);
        }
    }
    render(){
        const {props}=this;
        const inputProp: any = {};
        (typeof props.name !== 'undefined') && (inputProp.name = props.name);
        (typeof props.value !== 'undefined') && (inputProp.value = props.value);
        (typeof props.type !== 'undefined') && (inputProp.type = props.type);
        (typeof props.onChange !== 'undefined') && (inputProp.onChange =(e)=>{
            console.log('chg');
            props.onChange(e)
        });
        (typeof props.onBlur !== 'undefined') && (inputProp.onBlur = (e)=>{
            props.onBlur(e)
        });
        (typeof props.onFocus !== 'undefined') && (inputProp.onFocus = e=>{
            props.onFocus(props.onFocus)
        });
        return (
            <div className="custom-input-wrap" style={props.style || {}}>
                {typeof props.label !== 'undefined' && (
                    <div className="input-label">{props.label}</div>
                )}
                <div className={`input-item ${typeof props.label !== 'undefined' ? 'right' : ''}`}>
                    <input
                        className={`${props.showColor?'color-ipt':''}`}
                        {...inputProp}
                    />
                    {props.showColor&&(
                        <span className="color-block">
                            <i
                                style={{backgroundColor:props.value||'#ffffff'}}
                                onClick={this.handleClick}
                            ></i>
                        </span>
                    )}
                </div>
            </div>
        )
    }
}