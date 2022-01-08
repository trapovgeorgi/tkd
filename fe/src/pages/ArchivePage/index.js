import React from 'react'
import file from './pravilnik.doc'

export default function ArchivePage() {
    return (
        <div>
            <a href={file} download="pravilik.doc">Декларация, Правилник за Трениращи 22.9.2021</a>
        </div>
    )
}
