import React, { useState } from "react";
import InputField from "./component/InputField/InputField";
import DataTable from "./component/DataTable/DataTable";

function App() {
  const [username, setUsername] = useState("");

  const data = [
    { id: 1, name: "Ashiq", role: "Frontend" },
    { id: 2, name: "Ali", role: "Backend" },
    { id: 3, name: "Sara", role: "Designer" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">UI Demo</h1>
      <InputField
        label="Username"
        placeholder="Enter your username"
        helperText="This is a helper text"
        errorMessage="Invalid username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        invalid={username.length > 0 && username.length < 3}
        variant="outlined"
        size="medium"
      />

      <DataTable data={data} loading={false} />
    </div>
  );
}

export default App;
