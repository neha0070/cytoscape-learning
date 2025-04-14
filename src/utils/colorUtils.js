export function generateColor(index) {
    const pastelColors = [
      "#ffe0e0", "#e0f7fa", "#e8f5e9", "#f3e5f5", "#fff3e0",
      "#ede7f6", "#fbe9e7", "#e1f5fe", "#f9fbe7", "#fce4ec",
      "#f1f8e9", "#e8eaf6", "#fffde7", "#e0f2f1", "#fce4ec"
    ];
    return pastelColors[index % pastelColors.length];
  }