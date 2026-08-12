import java.util.Arrays;
import java.util.HashMap;

public class TwoSum {
// two pointer approach - time complexity O(n) and space complexity O(1)
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


// HashMap approach - Time: O(n), Space: O(n)
public static int[] twoSumHashMap(int[] arr, int target) {

    HashMap<Integer, Integer> map = new HashMap<>();

    for (int i = 0; i < arr.length; i++) {

        int partner = target - arr[i];

        if (map.containsKey(partner)) {
            return new int[]{arr[i], partner};
        }

        map.put(arr[i], i);
    }

    return new int[]{};
}


    public static void main(String[] args) {
        int[] arr = {1,2,4,6,7};
        int target = 13;
        System.out.println(Arrays.toString(twoSum(arr, target)));
    }
}
