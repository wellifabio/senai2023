#include <stdio.h>

int main() {
    int N;

    while (1) {
       
        scanf("%d", &N);

        if (N == 0) {
            break;
        }

        int i;
        printf("Portas abertas:");

        for (i = 1; i * i <= N; i++) {
            printf(" %d", i * i);
        }

        printf("\n");
    }

    return 0;
}
