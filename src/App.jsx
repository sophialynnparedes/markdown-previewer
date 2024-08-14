import { useEffect, useState } from "react";
import { marked } from "marked";
import "./styles.scss";
{
    /*


User Story #4: When I enter GitHub flavored markdown into the #editor element, 
the text is rendered as HTML in the #preview element as I type 
(HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain 
valid markdown that represents at least one of each of the following elements: a heading element (H1 size), 
a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

User Story #6: When my markdown previewer first loads, 
the default markdown in the #editor field should be rendered as HTML in the #preview element.
*/
}
export default function App() {
    const [text, setText] = useState("");

    marked.use({ breaks: true });

    useEffect(() => {
        const previewText = document.getElementById("preview");
        previewText.innerHTML = marked.parse(text);
    }, [text]);

    return (
        <>
            <div id="editor-container">
                <h1>Editor:</h1>
                <textarea
                    id="editor"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}></textarea>
            </div>
            <div id="preview-container">
                <h1>Preview:</h1>
                <div id="preview"></div>
            </div>
        </>
    );
}
