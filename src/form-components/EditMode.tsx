import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <label className="form-switch">
                <input
                    type="checkbox"
                    checked={editMode}
                    onChange={() => {
                        setEditMode(!editMode);
                    }}
                />
                {editMode ? "Edit Mode ON" : "Edit Mode OFF"}
            </label>

            {editMode ?
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        Student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                    </label>
                </div>
            :   <p>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
