#include<iostream>
#include<climits> 
using namespace std;
int main(){
    int arr[5] = {2,4,6,1,-1,43};
    int  size = 6;
    int a = INT_MAX;
    int index = 0;
    for(int i=0; i<size; i++){
        if(a > arr[i]){
            a = arr[i];
            index = i;
        }
    }
    cout << index << endl;
}