CREATE TABLE colleges (
    college_id SERIAL PRIMARY KEY,
    college_name VARCHAR(100),
    state VARCHAR(50)
);

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(100),
    college_id INT REFERENCES colleges(college_id),
    average_marks DECIMAL(5, 2)
);

CREATE TABLE subjects (
    subject_id SERIAL PRIMARY KEY,
    subject_name VARCHAR(50)
);

CREATE TABLE marks (
    mark_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(student_id),
    subject_id INT REFERENCES subjects(subject_id),
    marks_obtained INT CHECK(marks_obtained BETWEEN 0 AND 100)
);

-- Insert subject data
INSERT INTO subjects (subject_name) VALUES 
('English'), 
('Mathematics'), 
('Science'), 
('History');

-- Insert college data
DO $$
DECLARE
    i INT;
    college_name VARCHAR;
    state_name VARCHAR;
BEGIN
    FOR i IN 1..100 LOOP
        college_name := 'College_' || i;
        state_name := 'State_' || (i % 50 + 1);
        INSERT INTO colleges (college_name, state) VALUES (college_name, state_name);
    END LOOP;
END $$;

-- Insert student data and marks
DO $$
DECLARE
    i INT;
    student_name VARCHAR;
    college_id INT;
    subject_id INT;
    marks_obtained INT;
    total_marks INT;
    avg_marks DECIMAL(5, 2);
BEGIN
    FOR i IN 1..100000 LOOP
        student_name := 'Student_' || i;
        college_id := (i % 100) + 1;
        total_marks := 0;
        INSERT INTO students (student_name, college_id, average_marks) VALUES (student_name, college_id, 0) RETURNING student_id INTO i;
        
        FOR subject_id IN 1..4 LOOP
            marks_obtained := FLOOR(RANDOM() * 100) + 1;
            total_marks := total_marks + marks_obtained;
            INSERT INTO marks (student_id, subject_id, marks_obtained) VALUES (i, subject_id, marks_obtained);
        END LOOP;
        
        avg_marks := total_marks / 4.0;
        UPDATE students SET average_marks = avg_marks WHERE student_id = i;
    END LOOP;
END $$;
