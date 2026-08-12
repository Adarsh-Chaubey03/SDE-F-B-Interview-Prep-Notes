import java.util.Arrays;

public class TwoSum {

    public static  int[] twoSum(int[] arr, int target){
        int l =0;
        int r =arr.length-1;

      while(l<r){
          if (arr[l]+arr[r] == target){
         return new int[]{arr[l],arr[r]};
          } else if (arr[l]+arr[r] < target) {
              l++;
          } else {
              r--;
          }

      }
        return new int[]{};

    }

    public static void main(String[] args) {
        int[] arr = {1,2,4,6,7};
        int target = 13;
        System.out.println(Arrays.toString(twoSum(arr, target)));
    }
}
