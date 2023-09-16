using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;

namespace GitGithubC_Intro
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //1) İki ədədin cəmi
            //void Cem(int a, int b)
            //{
            //    int cem = a + b;
            //    Console.WriteLine("Cem = " + cem);
            //}
            //Cem(3, 4);

            //2) İki ədədin cəmi ilə fərqinin hasilini tapan funksiya
            //void Hasil(int x, int y)
            //{
            //    int hasil = ((x + y) * (x - y));
            //    Console.WriteLine(" Cemle ferqin hasili : " + hasil);
            //}
            //Hasil(3, 4);

            //3) Arrayinda 4 hərfdən az olan sözləri çapa verən proqram tərtib edin
            //string[] arr1 = { "salam", "masin", "buz", "ev", "kod", "meymun", "avtobus" };
            //for (int i = 0; i < arr1.Length; i++)
            //{
            //    if (arr1[i].Length < 4)
            //    {
            //        Console.WriteLine(arr1[i]);
            //    }
            //}

            //4) Arrayinda 4 hərfdən çox olan sözlərin sonuna AZE ifadəsini əlavə edərək çapa verən proqram tərtib edin
            //for (int i = 0; i < arr1.Length; i++)
            //{
            //    if (arr1[i].Length > 4)
            //    {
            //        Console.WriteLine(arr1[i] + " AZE ");
            //    }
            //}

            //5) Arrayinda olan elementləri çapa verən proqram tərtib edin
            //for (int i = 0; i < arr1.Length; i++)
            //{
            //    Console.Write(arr1[i]);
            //}

            //6) Arrayinin elemetlərini arasında boşluqlar olmaq şərti ilə yan-yana düzən proqram tərtib edin
            //for (int i = 0; i < arr1.Length; i++)
            //{
            //    Console.Write(arr1[i] + " ");
            //}

            //7) 0-dan 100-ə qədər olan ədədləri çapa verən proqram tərtib edin
            //            for (int i = 0; i <= 100; i++)
            //            {
            //                Console.WriteLine(i);
            //            }

            //8) 0-dan 100-ə qədər olan cüt ədədləri çap edən proqram tərtib edin
            //for (int i = 0; i <= 100; i++)
            //{
            //    if (i % 2 == 0)
            //        Console.WriteLine(i);
            //}

            //9) 0-dan 100-ə qədər olan tek ədədləri çap edən proqram tərtib edin
            //for (int i = 0; i <= 100; i++)
            //{
            //    if (i % 2 != 0)
            //        Console.WriteLine(i);
            //}

            //10) 0-dan 100-ə qədər olan ədədlər içərisində rəqəmləri bir birinə bərabər olan iki rəqəmli ədədləri çap edən proqram tərtib edin
            //for (int i = 1; i < 100; i++)
            //{
            //    int a = i / 10;
            //    int b = i % 10;
            //    if (a == b)
            //    {
            //        Console.WriteLine(i);
            //    }
            //}

            //11) İstənilən arrayin 1-ci elementini çapa verən funksiya yazın. Funksiya arraylari parametr olaraq alacaq
            int first(int[] array)
            {
                return array[0];
            }
            int[] a = { 14, 14, 5, 6, 22, 1, 88, 2, 4 };
            int birinci = first(a);
            Console.WriteLine(birinci);

            //12) İstənilən arrayin 1-ci elementini çapa verən funksiya yazın. Funksiya arraylari parametr olaraq alacaq
            int last(int[] array)
            {
                return array[array.Length - 1];
            }
            int[] b = { 14, 14, 5, 6, 22, 1, 88, 2, 4 };
            int sonuncu = last(b);
            Console.WriteLine(sonuncu);
        }
    }
}