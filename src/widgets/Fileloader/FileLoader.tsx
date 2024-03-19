/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import './FileLoader.scss'


const fileTypes: string[] = ['JPG', 'PNG','PDF', 'DOCX', 'SVG', 'ZIP'];

interface  IFileloader {
    map(arg0: (f: IFileloader) => void): unknown;
    lastModified: number,
    lastModifieddate: Date,
    name: string,
    size: number,
    type: string,
    webkitRelatyvePath: string,
    length?: number,
    [0]?: any,
    // file?[0]: string

    
}
const initialState = {} as IFileloader;

const FileLoader = () => {
    const isEmpty = (x:IFileloader) => !Object.keys(x || {}).length;
    const [file, setFile] =  useState(initialState);
    const handleChange = (file:IFileloader) => {
        console.log(file[0]);
        console.log(file.length);
        // console.log(file.size);
        console.log(Object.values(file));
        setFile(file);
    };
    return ( 
        <>
            <FileUploader 
                handleChange={handleChange}  
                name='file' types={fileTypes} 
                multiple={true}
                classes={'file-loader'}
            />
            {file.length !== 1 ? Object.values(file).map((f: any) => {
                // {console.log(f)}
                return(
                    <div key={f.lastModified}>
                        <span> {f.length} files loaded</span>
                        <span>size {f.size} bytes</span>
                        <span>
                            {`name: ${f?.name} successfully loaded`}
                        </span>
                    </div>
                    
                )
            }):
                <>
                <span> {file.length} files loaded</span>
                <span>size {file[0].size} bytes</span>
                <span>{!isEmpty(file)? `name: ${file[0]?.name} successfully loaded`: null}</span>
            </>
            }
        </>
    );
}
export default FileLoader;