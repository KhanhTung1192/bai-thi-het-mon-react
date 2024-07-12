import React from "react";
import Data from "./MyClip.json";
import "./nav.css";

export default function Video() {
  return (
    <table className="Video">
      <tbody>
        {Data.map((m, index) => {
          if (index % 2 === 0) {
            return (
              <tr key={index}>
                <td className="col-6">
                  <div className="baby">
                    <iframe
                      src={m.source_clip.replace("watch?v=", "embed/")}
                      title={m.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>

                    <img src={m.start} alt={m.title}></img>
                    <h4>{m.description}</h4>
                  </div>
                </td>
                {index + 1 < Data.length && (
                  <td className="col-6">
                    <div className="baby">
                      <iframe
                        src={Data[index + 1].source_clip.replace(
                          "watch?v=",
                          "embed/"
                        )}
                        title={Data[index + 1].title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                      <h2>{Data[index + 1].title}</h2>
                      <img
                        src={Data[index + 1].start}
                        alt={Data[index + 1].title}
                      ></img>
                      <h4>{Data[index + 1].description}</h4>
                    </div>
                  </td>
                )}
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
}
