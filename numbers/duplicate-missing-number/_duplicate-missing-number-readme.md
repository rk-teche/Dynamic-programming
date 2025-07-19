# Approaches

Use Case
✅ Input modification allowed - Negative Marking
✅ Strict in-place, no extra array - Cyclic Sort
✅ n is very small (≤ 32) - Bit Manipulation
✅ Input cannot be modified - BitSet Simulation

1️⃣ Cyclic Sort
	•	✅ Perfect fit for problems where elements fall in 1..n range.
	•	✅ Pure in-place sorting, no extra space.
	•	⚠ Can be a bit complex to write correctly due to duplicate handling.

2️⃣ Negative Marking
	•	✅ Cleaner code, very popular in interviews.
	•	✅ Works great if modifying input array is acceptable.
	•	✅ Slightly better runtime in practice than cyclic sort (since no swaps involved).
	•	⚠ Can’t be used if input array should remain unmodified.

3️⃣ Bit Manipulation
	•	✅ Pure O(1) space only for very small range problems (n ≤ 32 or 64).
	•	⚠ Not practical for this problem (since n ≤ 10^5).

4️⃣ BitSet Simulation (Bit Array)
	•	✅ Easy to write, conceptually simple.
	•	⚠ Consumes O(n) space.
	•	⚠ Technically not real bit manipulation — you’re simulating bit operations with an array.



