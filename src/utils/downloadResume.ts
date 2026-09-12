export async function downloadResume(e?: { preventDefault: () => void }) {
  if (e) {
    e.preventDefault();
  }
  try {
    // Try API route first, then static resume.pdf file
    let res = await fetch("/api/resume");
    if (!res.ok) {
      res = await fetch("/resume.pdf");
    }
    if (!res.ok) {
      throw new Error("Failed to fetch resume");
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "Archana_Sathiya_Seelan_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 1000);
  } catch (err) {
    console.error("Error downloading resume:", err);
    // Direct browser fallback
    window.open("/resume.pdf", "_blank");
  }
}
