import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=35,
        bottomMargin=35
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    primary_color = colors.HexColor("#0f2b5c")
    accent_color = colors.HexColor("#2563eb")
    text_dark = colors.HexColor("#1e293b")
    text_muted = colors.HexColor("#475569")
    
    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=primary_color,
        alignment=TA_CENTER
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=accent_color,
        alignment=TA_CENTER
    )
    
    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_muted,
        alignment=TA_CENTER
    )
    
    section_head_style = ParagraphStyle(
        'SectionHead',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=15,
        textColor=primary_color,
        spaceBefore=8,
        spaceAfter=3
    )
    
    body_bold = ParagraphStyle(
        'BodyBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=text_dark
    )
    
    body_regular = ParagraphStyle(
        'BodyRegular',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_dark
    )
    
    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=text_dark,
        leftIndent=12,
        firstLineIndent=-8
    )

    elements = []

    # Header
    elements.append(Paragraph("PRANAV MUKUND DESHMUKH", title_style))
    elements.append(Paragraph("Artificial Intelligence & Data Science Engineering Student", subtitle_style))
    elements.append(Spacer(1, 3))
    
    contact_text = (
        "Email: pranavdeshmukh2910@gmail.com &nbsp;|&nbsp; "
        "Location: Shirpur, Maharashtra, India<br/>"
        "LinkedIn: linkedin.com/in/pranav-deshmukh-043789339 &nbsp;|&nbsp; "
        "GitHub: github.com/Pranavdeshmukh2910"
    )
    elements.append(Paragraph(contact_text, contact_style))
    elements.append(Spacer(1, 6))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=accent_color, spaceAfter=8, spaceBefore=2))

    # Professional Summary
    elements.append(Paragraph("CAREER OBJECTIVE & PROFESSIONAL SUMMARY", section_head_style))
    summary_text = (
        "Enthusiastic and driven Artificial Intelligence and Data Science Engineering undergraduate with a strong "
        "foundation in machine learning algorithms, deep learning, statistical data analysis, and software development. "
        "Dedicated to developing intelligent, real-world technological solutions and seeking impactful internship and "
        "software engineering opportunities to contribute and grow."
    )
    elements.append(Paragraph(summary_text, body_regular))
    elements.append(Spacer(1, 6))

    # Education
    elements.append(Paragraph("EDUCATION", section_head_style))
    edu_header = [
        Paragraph("<b>Bachelor of Technology (B.Tech) - Artificial Intelligence & Data Science</b>", body_bold),
        Paragraph("<b>2022 - 2026 (Expected)</b>", ParagraphStyle('RAlign', parent=body_bold, alignment=TA_RIGHT))
    ]
    elements.append(Table([edu_header], colWidths=[400, 130]))
    elements.append(Paragraph("R.C. Patel Institute of Technology, Shirpur, Maharashtra", body_regular))
    elements.append(Paragraph("<b>Relevant Coursework:</b> Data Structures & Algorithms, Machine Learning, Deep Learning, Database Management Systems (SQL), Natural Language Processing, Object-Oriented Programming (Java/C++), Probability & Statistics.", bullet_style))
    elements.append(Spacer(1, 6))

    # Technical Skills
    elements.append(Paragraph("TECHNICAL SKILLS", section_head_style))
    skills_data = [
        [Paragraph("<b>Programming Languages:</b>", body_bold), Paragraph("Python, Java, C++", body_regular)],
        [Paragraph("<b>AI & Machine Learning:</b>", body_bold), Paragraph("Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision", body_regular)],
        [Paragraph("<b>Data Science & Analytics:</b>", body_bold), Paragraph("NumPy, Pandas, Matplotlib, Exploratory Data Analysis (EDA), Feature Engineering", body_regular)],
        [Paragraph("<b>Databases & Storage:</b>", body_bold), Paragraph("SQL, MySQL, Relational Database Management", body_regular)],
        [Paragraph("<b>Developer Tools & Platforms:</b>", body_bold), Paragraph("Git, GitHub, VS Code, Jupyter Notebook, Linux / CLI", body_regular)]
    ]
    skills_table = Table(skills_data, colWidths=[150, 380])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
        ('TOPPADDING', (0, 0), (-1, -1), 1),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ]))
    elements.append(skills_table)
    elements.append(Spacer(1, 6))

    # Projects
    elements.append(Paragraph("KEY TECHNICAL PROJECTS", section_head_style))
    
    # Project 1
    p1_head = [
        Paragraph("<b>Smart Resale Price Prediction for Mobile Phones</b> | <i>Python, Scikit-Learn, Pandas</i>", body_bold),
        Paragraph("<b>AI / ML Regression</b>", ParagraphStyle('RAlign', parent=body_regular, alignment=TA_RIGHT))
    ]
    elements.append(Table([p1_head], colWidths=[410, 120]))
    elements.append(Paragraph("• Designed an end-to-end regression model to estimate fair market resale values based on phone specifications, brand depreciation, and hardware conditions.", bullet_style))
    elements.append(Paragraph("• Implemented feature engineering, handled outliers, and evaluated multiple regression algorithms (Random Forest, Gradient Boosting) achieving high predictive accuracy.", bullet_style))
    elements.append(Spacer(1, 4))

    # Project 2
    p2_head = [
        Paragraph("<b>Predicting Progression of Diabetic Retinopathy from Retinal Scans</b> | <i>PyTorch, CNN, OpenCV</i>", body_bold),
        Paragraph("<b>Deep Learning / CV</b>", ParagraphStyle('RAlign', parent=body_regular, alignment=TA_RIGHT))
    ]
    elements.append(Table([p2_head], colWidths=[410, 120]))
    elements.append(Paragraph("• Developed a deep convolutional neural network (CNN) pipeline to identify and categorize severity stages of diabetic retinopathy from fundus retinal photographs.", bullet_style))
    elements.append(Paragraph("• Applied image preprocessing, contrast enhancement, and transfer learning to assist in early medical diagnostic screening.", bullet_style))
    elements.append(Spacer(1, 4))

    # Project 3
    p3_head = [
        Paragraph("<b>Smart Exam Seating Arrangement System</b> | <i>Python, Greedy & Backtracking Algorithms</i>", body_bold),
        Paragraph("<b>Algorithms / Optimization</b>", ParagraphStyle('RAlign', parent=body_regular, alignment=TA_RIGHT))
    ]
    elements.append(Table([p3_head], colWidths=[410, 120]))
    elements.append(Paragraph("• Built an automated constraint satisfaction system to allocate examination seats across multiple branches without adjacent peer collisions.", bullet_style))
    elements.append(Paragraph("• Integrated greedy heuristic sorting and backtracking algorithms to optimize hall capacity and generate conflict-free seating maps in seconds.", bullet_style))
    elements.append(Spacer(1, 4))

    # Project 4
    p4_head = [
        Paragraph("<b>Automated Student Attendance Monitoring & Analytics System</b> | <i>OpenCV, Python, SQLite</i>", body_bold),
        Paragraph("<b>Computer Vision & Analytics</b>", ParagraphStyle('RAlign', parent=body_regular, alignment=TA_RIGHT))
    ]
    elements.append(Table([p4_head], colWidths=[410, 120]))
    elements.append(Paragraph("• Developed a facial recognition-based automated attendance tracker that logs real-time student entries into a centralized database.", bullet_style))
    elements.append(Paragraph("• Built analytics dashboard tracking student attendance percentages, irregularity alerts, and downloadable summary reports.", bullet_style))
    elements.append(Spacer(1, 6))

    # Achievements & Extracurriculars
    elements.append(Paragraph("ACHIEVEMENTS, WORKSHOPS & CERTIFICATIONS", section_head_style))
    elements.append(Paragraph("• Active problem solver on competitive programming platforms with a focus on Data Structures & Algorithms.", bullet_style))
    elements.append(Paragraph("• Participated in college and inter-collegiate technical hackathons, building AI and software prototypes under tight deadlines.", bullet_style))
    elements.append(Paragraph("• Completed hands-on training workshops in Artificial Intelligence, Machine Learning pipelines, and modern web application development.", bullet_style))

    doc.build(elements)
    print(f"Resume generated successfully at {output_path}")

if __name__ == '__main__':
    target = os.path.join(r"C:\Users\Admin\.gemini\antigravity\scratch\pranav-portfolio\public", "resume-pranav-deshmukh.pdf")
    create_resume(target)
