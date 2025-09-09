//@ts-nocheck

export default function Hackers() {
  const estudiantes = [
    ["goncy", 445, ["B", "A", "A", "A", "A", "A"]],
    ["mati", 110, ["B", "A", "A", "A"]],
    ["caro", 200, ["B", "A", "A", "C"]],
  ];


  function findHackers(students) {
    // Un mapa para asignar puntos a cada calificación fácilmente.
    const scoreMap = {
      A: 30,
      B: 20,
      C: 10,
      D: 5,
    };

    // 1. Filtramos la lista para quedarnos solo con los hackers.
    const hackerList = students
      .filter((student) => {
        const registeredScore = student[1];
        const grades = student[2];

        // 2. Calculamos el puntaje base sumando los puntos de cada nota.
        let calculatedScore = grades.reduce((total, currentGrade) => {
          // Si la nota no está en el mapa (ej. 'F'), suma 0.
          return total + (scoreMap[currentGrade] || 0);
        }, 0);

        // 3. condiciones para el bonus.
        const hasEnoughGrades = grades.length >= 5;
        const allGradesAreHigh = grades.every(
          (grade) => grade === "A" || grade === "B"
        );

        if (hasEnoughGrades && allGradesAreHigh) {
          calculatedScore += 20;
        }

        // 4.límite máximo de 200 puntos.
        const finalCalculatedScore = Math.min(calculatedScore, 200);

        // 5.  es hacker si los puntajes no coinciden.
        return finalCalculatedScore !== registeredScore;
      })
      // 6.  obtener solo los nombres.
      .map((hackerStudent) => hackerStudent[0]);

    return hackerList;
  }

  const hackerNames = findHackers(estudiantes);
  
  console.log(hackerNames);

  return (
    <div>
      <h1>Lista de Hackers Detectados</h1>
      <ul>
        {hackerNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}