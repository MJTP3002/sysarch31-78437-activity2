import React from "react";
import Student from "./Student";
import "./index.css"; // Assuming you have a separate CSS file for your styles

const students = [
  { photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/175388b3-6ab6-49dc-b182-ff06a333d141/dfyufkl-f0748a31-646f-4300-a4d0-e32fc796b050.jpg/v1/fill/w_1280,h_1368,q_75,strp/adventure_time_finn_png_by_keylaworld100_dfyufkl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2OCIsInBhdGgiOiJcL2ZcLzE3NTM4OGIzLTZhYjYtNDlkYy1iMTgyLWZmMDZhMzMzZDE0MVwvZGZ5dWZrbC1mMDc0OGEzMS02NDZmLTQzMDAtYTRkMC1lMzJmYzc5NmIwNTAuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Vf-5hE7h5J9bEkUB4smWtLv6j6t4E0wFXvaIWNdpQbk", name: "Fin", email: "@finAdventuretime" },
  { photo: "https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg", name: "Monkey", email: "@monkey" },
  { photo: "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?b=1&s=612x612&w=0&k=20&c=-niqIUX8Kfiyn50xgUzxxUYX6H2q9BlGc3PX5PVM-iA=", name: "Cat",email: "@cat" },
  { photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg", name: "Jaguar", email: "@Jaguar" },
  { photo: "https://static.wixstatic.com/media/9149f5_32a19519f61f4ac59c2d6f709e1ee81c~mv2.jpg/v1/fill/w_640,h_482,al_c,lg_1,q_80,enc_auto/9149f5_32a19519f61f4ac59c2d6f709e1ee81c~mv2.jpg", name: "Danny Phantom", email: "@dannyphantom" },
  
];

const StudentList = () => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <Student key={index} photo={student.photo} name={student.name} email={student.email} />
      ))}
    </div>
  );
};

export default StudentList;