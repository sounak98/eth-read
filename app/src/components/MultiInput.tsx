import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface MultiInputProps {
  title: string;
  subtitle?: string;
  inputElement: string;
  setValue: Dispatch<SetStateAction<string[]>>;
}

function MultiInput(props: MultiInputProps) {
  const [elements, setElements] = useState<string[]>([]);

  const updateElement = (element: string, index: number) => {
    const newElements = [...elements];
    newElements[index] = element;
    setElements(newElements);
  };

  const deleteElement = (index: number) => {
    const newElements = [...elements];
    newElements.splice(index, 1);
    setElements(newElements);
  };

  const addEmptyElement = () => {
    setElements([...elements, ""]);
  };

  useEffect(() => {
    props.setValue(elements);
  }, [elements]);

  return (
    <div className="flex flex-col items-stretch gap-2">
      <div className="font-semibold text-slate-600 ">{props.title}</div>
      {props.subtitle && (
        <div className="text-sm text-slate-600">{props.subtitle}</div>
      )}
      <div className="flex flex-col items-stretch gap-4">
        {[
          elements.map((element, index: number) => (
            <div key={index} className="flex flex-row items-stretch gap-2">
              <input
                value={element}
                type="text"
                placeholder={`${props.inputElement} ${index + 1}`}
                onChange={(e) => updateElement(e.target.value, index)}
                className="flex-grow"
              />
              <button
                onClick={() => deleteElement(index)}
                className="text-sm underline"
              >
                Delete
              </button>
            </div>
          )),
        ]}
      </div>
      <div>
        <button onClick={addEmptyElement} className="text-sm underline">
          Add {props.inputElement.toLowerCase()}
        </button>
      </div>
    </div>
  );
}

export default MultiInput;
