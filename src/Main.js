import ReactMarkdown from "react-markdown";

function Main({activeNote, onUpdateNote}){
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

        if(!activeNote) return <div className="no-active-note">No Note Selected</div>;

    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" value={activeNote.title === "Untitled Note" ? "" : activeNote.title} onChange={(e) => onEditField("title", e.target.value)} placeholder="Untitled Note" autoFocus />
            <textarea id="body" value={activeNote.body} placeholder="Write your note here..." onChange={(e) => onEditField("body", e.target.value)} />
        </div>

        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <div className="markdown-preview"><ReactMarkdown>{activeNote.body}</ReactMarkdown></div>
        </div>

    </div>;
}

export default Main;