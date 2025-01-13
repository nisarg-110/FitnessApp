from flask import Flask, render_template
import pandas as pd
import matplotlib.pyplot as plt

app = Flask(__name__)

# Analyze attendance data
def analyze_attendance():
    # Read the CSV file
    df = pd.read_csv('attendance.csv')

    # Average attendance by category
    avg_attendance = df.groupby('category')['attendees'].mean().reset_index()

    # Classes with highest and lowest attendance
    top_classes = df.nlargest(3, 'attendees')
    bottom_classes = df.nsmallest(3, 'attendees')

    # Generate bar chart for average attendance
    plt.figure(figsize=(8, 6))
    plt.bar(avg_attendance['category'], avg_attendance['attendees'], color='skyblue')
    plt.xlabel('Category')
    plt.ylabel('Average Attendance')
    plt.title('Average Attendance by Category')
    plt.savefig('static/avg_attendance.png')
    plt.close()

    return avg_attendance, top_classes, bottom_classes

@app.route('/')
def dashboard():
    avg_attendance, top_classes, bottom_classes = analyze_attendance()
    return render_template(
        'dashboard.html',
        avg_attendance=avg_attendance.to_dict(orient='records'),
        top_classes=top_classes.to_dict(orient='records'),
        bottom_classes=bottom_classes.to_dict(orient='records')
    )

if __name__ == '__main__':
    analyze_attendance()
    app.run(debug=True)
