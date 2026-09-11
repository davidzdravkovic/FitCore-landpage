"""Generate Instagram-shareable PNG slides: landing page credibility research."""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

OUT = Path(r"C:\Users\User\OneDrive\Десктоп")
W, H = 1080, 1350  # Instagram portrait / carousel
BG = (10, 15, 20)
CARD = (17, 25, 33)
BORDER = (30, 42, 54)
GREEN = (16, 185, 129)
WHITE = (255, 255, 255)
MUTED = (148, 163, 184)
LIGHT = (226, 232, 240)

def font(size, bold=False):
    candidates = [
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()

def wrap(draw, text, f, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = f"{cur} {w}".strip()
        if draw.textlength(test, font=f) <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines or [""]

def new_slide():
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    return img, draw

def header(draw, title, subtitle=None):
    draw.rounded_rectangle((48, 48, W - 48, 160), radius=20, fill=CARD, outline=BORDER, width=2)
    draw.text((72, 72), title, font=font(36, True), fill=WHITE)
    if subtitle:
        draw.text((72, 118), subtitle, font=font(22), fill=GREEN)

ROWS = [
    ("1", "Named case study + metric", "Highest", "Missing"),
    ("2", "Third-party reviews (G2 etc.)", "Very high", "Missing"),
    ("3", "Attributed testimonial + result", "Very high", "Missing"),
    ("4", "Recognizable client logos", "High", "Missing"),
    ("5", "Product UI / video / demo", "High (capability)", "Mostly missing"),
    ("6", "Founder / team identity", "High if no clients", "Weak"),
    ("7", "Process after contact", "Medium–high", "Partial"),
    ("8", "Risk clarity (pricing, not-for)", "Medium–high", "Partial"),
    ("9", "Problem specificity", "Medium", "Strong now"),
    ("10", "Company / legal basics", "Medium", "Missing"),
]

def slide1():
    img, draw = new_slide()
    header(draw, "Landing improvements", "B2B credibility research (objective)")
    y = 200
    f_title = font(28, True)
    f_body = font(24)
    bullets = [
        "B2B buyers trust EVIDENCE, not adjectives.",
        "Proof layers: legitimacy → relevance → capability → outcomes → risk reversal.",
        "When available, peer/outcome proof usually beats product demo for booking a call.",
        "Demo/UI evidence = strong capability proof — not always #1 trust signal in research.",
        "Early stage without clients: founder + process + product artifacts.",
    ]
    for b in bullets:
        draw.rounded_rectangle((48, y, W - 48, y + 140), radius=16, fill=CARD, outline=BORDER, width=1)
        lines = wrap(draw, b, f_body, W - 140)
        draw.text((72, y + 20), "•", font=f_title, fill=GREEN)
        ty = y + 22
        for line in lines:
            draw.text((100, ty), line, font=f_body, fill=LIGHT)
            ty += 32
        y += 160
    draw.text((48, H - 60), "FitCore · share with Tase · research summary", font=font(20), fill=MUTED)
    img.save(OUT / "landingimprovements-1.png", "PNG")
    print("wrote landingimprovements-1.png")

def slide2():
    img, draw = new_slide()
    header(draw, "Credibility power ranking", "What the research ranks highest")
    y = 190
    # column headers
    draw.text((70, y), "#", font=font(20, True), fill=GREEN)
    draw.text((110, y), "Element", font=font(20, True), fill=GREEN)
    draw.text((620, y), "Power", font=font(20, True), fill=GREEN)
    draw.text((820, y), "Our page", font=font(20, True), fill=GREEN)
    y += 40
    draw.line((48, y, W - 48, y), fill=BORDER, width=2)
    y += 16
    for num, el, power, status in ROWS:
        draw.rounded_rectangle((48, y, W - 48, y + 88), radius=12, fill=CARD, outline=BORDER, width=1)
        draw.text((70, y + 28), num, font=font(22, True), fill=GREEN)
        el_lines = wrap(draw, el, font(22), 480)
        draw.text((110, y + 18), el_lines[0], font=font(22), fill=WHITE)
        if len(el_lines) > 1:
            draw.text((110, y + 48), el_lines[1], font=font(20), fill=MUTED)
        draw.text((620, y + 28), power, font=font(18), fill=LIGHT)
        status_color = GREEN if "Strong" in status else ((250, 204, 21) if "Partial" in status or "Weak" in status or "Mostly" in status else (248, 113, 113))
        draw.text((820, y + 28), status, font=font(18), fill=status_color)
        y += 100
    draw.text((48, H - 60), "1 of 2 ranking slides · FitCore", font=font(20), fill=MUTED)
    img.save(OUT / "landingimprovements-2.png", "PNG")
    print("wrote landingimprovements-2.png")

def slide3():
    img, draw = new_slide()
    header(draw, "What to do next", "Non-word proof · suggested order")
    y = 200
    items = [
        ("P1", "Founder / team identity", "Real names, why fitness ops — identity proof"),
        ("P1", "Clear process after email", "Steps, timeline, expectations — cuts risk"),
        ("P1", "Product screens or 60s video", "Capability proof buyers can see"),
        ("P2", "Who it's for / not for", "Honest filtering + engagement model"),
        ("P3", "First pilot metric + quote", "Outcome / social proof when you have it"),
        ("Avoid", "Fake logos / trusted-by-N", "Hurts trust when discovered"),
    ]
    for tag, title, desc in items:
        draw.rounded_rectangle((48, y, W - 48, y + 130), radius=16, fill=CARD, outline=BORDER, width=1)
        draw.text((72, y + 24), tag, font=font(22, True), fill=GREEN)
        draw.text((160, y + 24), title, font=font(26, True), fill=WHITE)
        for i, line in enumerate(wrap(draw, desc, font(22), W - 160)):
            draw.text((160, y + 70 + i * 28), line, font=font(22), fill=MUTED)
        y += 148
    draw.text((48, H - 60), "Instagram carousel · landingimprovements", font=font(20), fill=MUTED)
    img.save(OUT / "landingimprovements-3.png", "PNG")
    print("wrote landingimprovements-3.png")

if __name__ == "__main__":
    slide1()
    slide2()
    slide3()
    print(f"Saved to {OUT}")
