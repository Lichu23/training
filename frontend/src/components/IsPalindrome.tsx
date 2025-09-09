
export default function IsPalindromeView() {
  // 2 ejercicio:
  // Escribe una funciomn llamada isPalindrome que determina si una palabra es palindroma
  //  (se lle al derecho y al revez igual). Ignora espacios y mayusculas.
  //  isPalindrome("Anita lava la tina") // => true

  function isPalindrome(word: string) {
    const wordTrim = word.trim()
    const wordWithoutSpace = wordTrim.toLocaleLowerCase().split(" ").join("")
    const wordReverse = wordWithoutSpace.split("").reverse().join("")
    
    return wordWithoutSpace === wordReverse
    }

  console.log("Anita es palindromo?:", isPalindrome("Anita lava la tina"))
  console.log("Pedro es palindromo?:", isPalindrome("Pedro"))

  return <div>IsPalindrome</div>;
}
