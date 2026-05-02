const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "token_expired";

async function Log(stack, level, pkg, message) {
  try {
    await fetch("http://20.207.122.201/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        stack: stack,
        level: level,
        package: pkg,
        message: message,
      }),
    });
  } catch (err) {
    console.error("Logging failed:", err);
  }
}

module.exports = { Log };