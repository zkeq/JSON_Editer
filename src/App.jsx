import SvelteJSONEditor from "./SvelteJSONEditor";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [readOnly] = useState(false);
  const [content, setContent] = useState({
    json: {
      greeting: "Hello World",
      color: "#ff3e00",
      ok: true,
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    text: undefined
  });

  return (
          <div className="my-editor">
            <SvelteJSONEditor
              content={content}
              readOnly={readOnly}
              onChange={setContent}
            />
          </div>
  );
}
