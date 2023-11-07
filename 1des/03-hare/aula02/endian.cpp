/* 
   Write a C program to find out if the underlying 
   architecture is little endian or big endian. 
 */
 
#include <stdio.h>
int main ()
{
  unsigned int x = 0x76543210;
  char *c = (char*) &x;
 
  printf ("*c is: 0x%x\n", *c);
  if (*c == 0x10)
  {
    printf ("A arquitetura do Computador é little endian. \n");
  }
  else
  {
     printf ("A arquitetura do Computador é big endian. \n");
  }
 
  return 0;
}
