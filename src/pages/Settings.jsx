import { useState } from "react";

function Settings() {

  const [currency, setCurrency] = useState("USD");
  const [timezone, setTimezone] = useState("UTC");
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("light");

  const handleReset = () => {
    setCurrency("USD");
    setTimezone("UTC");
    setNotifications(true);
    setTheme("light");
  };

  const handleSave = () => {
    alert("Settings Saved");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Settings</h2>

      <form data-testid="settings-form">

        {/* Currency */}
        <div>
          <label>Currency: </label>
          <select
            data-testid="currency-select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
          </select>
        </div>

        {/* Timezone */}
        <div style={{ marginTop: "15px" }}>
          <label>Timezone: </label>
          <select
            data-testid="timezone-select"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            <option>UTC</option>
            <option>IST</option>
            <option>PST</option>
          </select>
        </div>

        {/* Notifications */}
        <div style={{ marginTop: "15px" }}>
          <label>
            <input
              type="checkbox"
              data-testid="notifications-toggle"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            Enable Notifications
          </label>
        </div>

        {/* Theme */}
            <div
            style={{
                padding: "20px",
                backgroundColor: theme === "dark" ? "#222" : "#fff",
                color: theme === "dark" ? "#fff" : "#000",
                minHeight: "100vh"
            }}
            >
          <label>Theme: </label>
          <button
            type="button"
            data-testid="theme-toggle"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          >
            Toggle Theme ({theme})
          </button>
        </div>

        {/* Buttons */}
        <div style={{ marginTop: "20px" }}>
          <button
            type="button"
            data-testid="save-settings-button"
            onClick={handleSave}
          >
            Save Settings
          </button>

          <button
            type="button"
            data-testid="reset-settings-button"
            onClick={handleReset}
            style={{ marginLeft: "10px" }}
          >
            Reset
          </button>
        </div>

      </form>

    </div>
  );
}

export default Settings;